import axios from "axios"

export async function getTransactionData(txId) {
    try {
      const response = await axios.get(`https://arweave.net/${txId}/data`)
      console.log("data from arweave.net",response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
}
  