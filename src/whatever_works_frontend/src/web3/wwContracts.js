export const wwContracts = {
  address: "0x02f39e83656c3d7ae3f02721c6aa90e01d861c09",
  abi: [
    {
      inputs: [
        {
          internalType: "bytes",
          name: "record",
          type: "bytes",
        },
      ],
      name: "propagate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "register",
          type: "address",
        },
        {
          internalType: "address",
          name: "lockChecker",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
  ],
};

/*
    Template for a smart contract call:

  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(abi, address);
  useEffect(() => {
    const data = "0x1234567890";
    contract.methods
      .propagate(data)
      .send({
        from: account,
      })
      .then((res) => console.log(res));
  }, []);
  */
