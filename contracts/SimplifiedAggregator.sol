pragma solidity ^0.8.19;

contract NReg {
    mapping(string => address) links;
    /// @dev mapping(address => string) owner

    function find(string calldata name) external view returns (bool, address) {
        address account = links[name];

        return (account != address(0), account);
    }

    function register(string calldata name, address account) external {
        links[name] = account;
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

library AccountCreator {
    function basis() external returns (address) {

    }

    function propagate() external returns (address) {

    }
}

contract Account {
    function root() public view returns (address) {

    }
}

contract Decorator {
    modifier allowed(string calldata name) {
        require(msg.sender == NReg.registrer(name));
        _;
    }

    modifier emptyOrOutlived(string calldata name) {
        _;
    }

    function withLifetime(string calldata name) external allowed(name) emptyOrOutlived(name) {
        Account account = AccountCreator.basis(); /// @dev inject executor to pick up the propagation

        NReg.register(name, address(account));
    }

    function withPropagation(string calldata name, address root) external allowed(name) {
        Account account = AccountCreator.propagate();
        address target = account.root();

        NReg.register(name, target);
    }

    function withPropagationDelayed(string calldata name, address root, address[] assets, uint128 timestamp) external allowed(name) {
        /// @dev ...

        queue.push(name, root, assets, timestamp); /// @dev lock checks
    }
}

contract Executor {}

contract Queue {
    struct QueueRecord {
        string lifetime;
    }

    modifier executor {
        _;
    }

    modifier scheduler {
        _;
    }

    function push(string calldata name, address target, address[] assets, uint128 timestamp) external scheduler {

    }

    function propagate(bytes calldata record) external executor {
        /// @dev deserialize record

        require(block.timestamp >= timestamp);

        uint256 length = assets.length;
        address account = NReg.find(name);

        for(uint i = 0; i < length;) {
            address asset = assets[i];
            uint256 balance = ERC20(asset).balanceOf(account);

            ERC20(asset).transferFrom(account, target, balance);

            unchecked {
                ++i;
            }
        }
    }
}