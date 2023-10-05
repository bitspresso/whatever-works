pragma solidity ^0.8.19;

interface Sync {
    function sync() external;
}

interface NameWrapper is Sync {}
interface Satellite {}
enum Lifetime { OneRound, Multiple }

interface IAggregator {
    /// @notice 
    function link(NameWrapper instance) external;
    function unlink(bytes calldata repr) external;
    function prove(bytes calldata signature) external;
    function try_register(string calldata name, Satellite ns) external;
    function set_lifetime(NameWrapper instance, Lifetime duration) external;
    function resolve() external;
}

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract Aggregator {
    constructor() {

    }

    function link() public {

    }
}