pragma solidity ^0.8.19;

contract NReg {
    mapping(string => address) links;
    mapping(address => string) relations;
    mapping(string => address) reverse;
    mapping(string => bool) claimed;

    modifier unique(string calldata name) {
        require(!claimed[name]);
        _;
    }

    function find(string calldata name) external view returns (bool, address) {
        address account = links[name];

        return (account != address(0), account);
    }

    function owner(string calldata name) external view returns (address) {
        return reverse[name];
    }

    function register(string calldata name, address account) external {
        _register(name, account, msg.sender);
    }

    function registerFor(string calldata name, address account, address owner) external {
        _register(name, account, owner);
    }

    function _register(string calldata name, address account, address owner) private unique(name) {
        links[name] = account;
        relations[owner] = name;
    }

    /// @dev add register_with()
}

contract Resolver {
    error NoMappedAddressFound();

    address immutable registry;

    constructor(address _registry) {
        registry = _registry;
    }

    function resolve(string calldata name) external view returns (address) {
        (bool result, address account) = NReg(registry).find(name);

        if(!result) {
            revert NoMappedAddressFound();
        }

        return account;
    }
}

contract Account {
    function target() public view returns (address) {

    }

    function approveFor(address authority, address target, address asset, uint256 amount) public {

    }
}

contract Decorator {
    address immutable register;
    address immutable queue;
    address immutable lockChecker;

    constructor(address _register, address _queue, address _lockChecker) {
        register = _register;
        queue = _queue;
        lockChecker = _lockChecker;
    }

    modifier allowed(string calldata name) {
        require(msg.sender == NReg(register).owner(name));
        _;
    }

    modifier emptyOrOutlived(string calldata name) {
        _;
    }

    function withLifetime(string calldata name) external allowed(name) emptyOrOutlived(name) {
        Account account = new Account(); /// @dev inject executor to pick up the propagation

        NReg(register).register(name, address(account));
    }

    function withPropagation(string calldata name, address target) external allowed(name) {
        Account account = new Account();

        NReg(register).register(name, target);
    }

    function withPropagationDelayed(string calldata name, address target, address[] calldata assets, uint128 timestamp) external allowed(name) {
        Account account = new Account(); /// @dev inject, please
        address accountAddress = address(account);

        LockChecker(lockChecker).lock(accountAddress);

        _allowanceHelper(accountAddress, target, assets);

        Queue(queue).push(accountAddress, target, assets, timestamp); /// @dev lock checks
    }

    function _allowanceHelper(address source, address target, address[] calldata assets) private {
        uint256 length = assets.length;

        for(uint i = 0; i < length;) {
            address asset = assets[i];
            uint256 amount = ERC20(asset).balanceOf(source);

            Account(source).approveFor(queue, target, asset, amount);

            unchecked {
                ++i;
            }
        }
    }
}

contract LockChecker {
    modifier authorized {
        _;
    }

    function lock(address account) external authorized {

    }

    function unlock(address account) external authorized {

    }

    function rescue() public {
        /// @dev only owner
    }
}

contract ERC20 {
    function balanceOf(address account) public view returns (uint256) {

    }

    function approve(address target, uint256 amount) public {

    }

    function approveFrom(address from, address to, uint256 amount) public {

    }

    function transferFrom(address from, address to, uint256 amount) public {

    }
}

contract Executor {}

contract Queue {
    address immutable register_;
    address immutable executor_;
    address immutable scheduler_;
    address immutable lockChecker_;

    constructor(address _register, address _executor, address _scheduler, address _lockChecker) {
        register_ = _register;
        executor_ = _executor;
        scheduler_ = _scheduler;
        lockChecker_ = _lockChecker;
    }

    struct QueueRecord {
        string lifetime;
    }

    modifier executor {
        _;
    }

    modifier scheduler {
        _;
    }

    function push(address account, address target, address[] calldata assets, uint128 timestamp) external scheduler {

    }

    function propagate(bytes calldata record) external executor {
        /// @dev deserialize record

        (string memory name, address target, address[] memory assets, uint128 timestamp) = abi.decode(record, (string, address, address[], uint128));

        require(block.timestamp >= timestamp);

        uint256 length = assets.length;
        (, address account) = NReg(register_).find(name);

        for(uint i = 0; i < length;) {
            address asset = assets[i];
            uint256 balance = ERC20(asset).balanceOf(account);

            ERC20(asset).transferFrom(account, target, balance);

            unchecked {
                ++i;
            }
        }

        LockChecker(lockChecker_).unlock(account);
    }
}