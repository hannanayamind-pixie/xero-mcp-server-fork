import express from "express";
import { main } from "@xeroapi/xero-mcp-server";

const app = express();
const PORT = process.env.PORT || 1000;

// Start the Xero MCP server in the background
main().catch(err => console.error("Error starting MCP server:", err));

// Simple route so Render sees an open web port
app.get("/", (req, res) => {
  res.send("Xero MCP server is running");
});

// Start Express web server (so Render detects the port)
app.listen(PORT, () => {
  console.log(`Wrapper web server running on port ${PORT}`);
});
