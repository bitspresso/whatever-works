pragma solidity ^0.8.19;

/* ! rust:
    #[update]
    fn relay(context, target) {

    }
**/

interface Sync {
    event InitSync(uint64 src, uint64 dest, string name); /// @dev picked and broadcasted by executor

    function sync() external;
}

interface NameWrapper is Sync {
    function try_register(string calldata name, Satellite ns) external;
    function resolve() external;
}

interface Satellite {}
enum Lifetime { OneRound, Multiple }

interface IAggregator {
    /// @notice 
    function link(NameWrapper instance) external;
    function unlink(bytes calldata repr) external;
    function prove(bytes calldata signature) external;
    function set_lifetime(NameWrapper instance, Lifetime duration) external;
}

interface Registry {
    function map(NameWrapper instance, uint16) external;
}

/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract Aggregator {
    Registry private registry;

    constructor() {

    }

    function link(NameWrapper instance, uint16 chainId) public {
        registry.map(instance, chainId);
    }

    function try_register() public {

    }


    function set_lifetime() public {

    }

    function get_associated_names_by_addr(address main) public view {

    }

    function get_associated_names_by_name(NameWrapper main) public view {

    }
}