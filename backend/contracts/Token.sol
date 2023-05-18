pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract ICO_Token_Contract is ERC20{
	constructor() ERC20("staking token", "ICO") {
		_mint(msg.sender, 500000);
	}
}

contract ICO_Contract {
    string public name = "My Contract";
    string public symbol = "MHT";

    address private admin;
	address payable private wallet;
	IERC20 private token;

    mapping(address => uint256) depositAmountOf;

    uint tokenPrice = 1;
    uint minDeposit = 10;
    uint maxDeposit = 50;
    uint softCap = 100;
    uint hardCap = 1000;
	uint totalDeposit = 0;

	uint startTime;
	uint endTime;

	enum State{
		BEFORE,
		RUNNING,
		END
	}
	State public currentState;

    event Transfer(address indexed _from, address indexed _to, uint256 _value); //transfor event log
	event TokenBurn(address _to, uint _amount, uint _time);

    constructor(address payable _wallet, address _token) {
        admin = msg.sender;
		wallet = _wallet;
		token = IERC20(_token);
    }

	modifier onlyAdmin(){ //admin permission
		require(msg.sender == admin, "Admin only accessable");
		_;
	}

	function startICO() external onlyAdmin{
		require(currentState == State.BEFORE, "current state is not BEFORE");

		startTime = block.timestamp;
		endTime = startTime + (24 * 60 * 60);
		currentState = State.RUNNING;
	}

    function transfer() public payable {
		require(currentState == State.RUNNING, "ICO isn't running");
		require(depositAmountOf[msg.sender] + msg.value <= maxDeposit, "Deposit amount is too big");
		require(msg.value >= minDeposit && msg.value <= maxDeposit, "One time deposit amount is too big");

		(bool transferSuccess, ) = wallet.call{value: msg.value}("");
        require(transferSuccess, "Failed to Deposit_wallet");

        depositAmountOf[msg.sender] += msg.value;
		totalDeposit += msg.value;

		uint tokens = msg.value / tokenPrice;
        bool saleSuccess = token.transfer(msg.sender, tokens);
        require(saleSuccess, "Failed to Deposit_token");

        emit Transfer(address(this), msg.sender, msg.value);
    }

	function endICO() public{
		require(currentState == State.RUNNING, "ICO should be running");
		require(block.timestamp >= endTime || totalDeposit >= hardCap, "end condition does not matched");
		currentState = State.END;
	}

    function getICOTokenBalance() external view returns (uint) {
        return token.balanceOf(address(this));
    }

    function investorBalanceOf(address _investor) external view returns (uint) {
        return token.balanceOf(_investor);
    }
}
