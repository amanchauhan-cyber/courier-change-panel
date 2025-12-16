const res = await axios.put(
  "https://lsm-shipments.scm.lenskart.com/change-courier",
  {
    courierCode,
    packetId
  },
  {
    headers: {
      "Content-Type": "application/json"
    }
  }
);
