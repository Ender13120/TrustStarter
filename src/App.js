import { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from "./ABI/Campaign.json";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import {
  CardHeader,
  Avatar,
  Link as MaterialLink,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import Whitepaper from "./Whitepaper";

let provider;
let signer;
let campaignContract;

const mumbaiChainId = "0x13881"; // Chain Id for Mumbai testnet
const campaignContractAddress =
  "0x0A017E11e96516408D567B1039B4B577a6Bf6B19";

async function initializeEthers() {
  // default provider
  provider = new ethers.providers.JsonRpcProvider(
    "https://rpc-mumbai.maticvigil.com/"
  );

  campaignContract = new ethers.Contract(
    campaignContractAddress,
    contractABI,
    provider // Use the provider only (not the signer)
  );
}

function CampaignCard({ campaign, index }) {
  const goal = ethers.utils.formatEther(campaign[2]);
  const currentAmount = ethers.utils.formatEther(campaign[3]);
  const progress = (currentAmount / goal) * 100;
  const creatorAddress = campaign[1]; //placeholder
  const etherscanUrl = `https://etherscan.io/address/${creatorAddress}`; // Replace with the correct Etherscan url (doesnt work on empty)
  const nftImageUrl = [
    "https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2022/08/GRND_NFT_TYPE1.jpeg",
    "https://nftnewspro.com/wp-content/uploads/2023/02/Most-popular-NFT-artists-to-follow-in-2023-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYy5z8iV3KkYc3a3BmK52zNu00aUY1m-TUg&usqp=CAU",
    "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/02/18120807/GettyImages-1313353553.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRVsG7q_szLfjSNjZLQDC-Cr9zPmrFFscGQ&usqp=CAU",
  ]; // Placeholder

  const projectImageUrl = [
    "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_630,w_1200/v1682009152/vvalewwxiby4mbxz9wrh.jpg",
    "https://customkbd.com/cdn/shop/products/lil584_1400x.png?v=1652861462",
  ];

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardHeader
        avatar={
          <MaterialLink
            href={etherscanUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              sx={{ bgcolor: "secondary.main" }}
              src={nftImageUrl[index]}
              alt={`Campaign ${index + 1}`}
            />
          </MaterialLink>
        }
        title={`Campaign ${index + 1}: ${campaign[0]}`}
      />
      <CardMedia
        component="img"
        height="140"
        image={projectImageUrl[index]} // Replace this with campaign image
        alt={campaign[0]}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* Replace this with campaign tagline */}
          This is a tagline for the campaign.
        </Typography>
        <Typography variant="body2">Goal: {goal} ETH</Typography>
        <Typography variant="body2">
          Raised: {currentAmount} ETH
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="body2">
          Status:{" "}
          {campaign[4].toNumber() === 0 ? "Inactive" : "Active"}
        </Typography>
        <Typography variant="body2">
          Deadline:{" "}
          {new Date(campaign[5].toNumber() * 1000).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}

function WhitePaperPage() {
  return (
    <div>
      <Whitepaper />
    </div>
  );
}

function NavBar({ getCampaigns, connectWallet, connectedAddress }) {
  const [anchorEl, setAnchorEl] = useState(null); // Track the DOM element that triggered the menu

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the clicked element as the anchor
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu by nullifying the anchor element
  };

  const formatAddress = (address) => {
    if (!address) return "";
    const start = address.substring(0, 6);
    const end = address.substring(address.length - 4);
    return `${start}...${end}`;
  };

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(45deg, #040b29 0%, #362d64 50%, #606c88 100%)",
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              getCampaigns();
              handleClose();
            }}
          >
            Get Campaign Details
          </MenuItem>
          <MenuItem
            onClick={() => {
              connectWallet();
              handleClose();
            }}
          >
            Connect Wallet
          </MenuItem>

          <MenuItem
            component={RouterLink}
            to="/whitepaper"
            onClick={handleClose}
          >
            Whitepaper
          </MenuItem>
          <MenuItem
            component={RouterLink}
            to="/"
            onClick={handleClose}
          >
            Home
          </MenuItem>
        </Menu>

        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontFamily: "'Special Elite'", // Use a unique font for logo representation
            color: "#c2c9e0", // Light, but slightly muted blue-grey to stand out against the background
            letterSpacing: 2, // Space out the letters a bit
            border: "2px solid #c2c9e0", // Border with the same color
            borderRadius: "8px", // Round the corners
            padding: "4px 8px", // Add some padding
            display: "inline-block", // Make the block inline to size to content
            background: "rgba(255, 255, 255, 0.1)", // Slight white background to make it pop, but with 10% opacity to maintain the space feel
          }}
        >
          TrustStarter
        </Typography>
        <Button color="inherit" onClick={getCampaigns}>
          Get Campaign Details
        </Button>

        <Button
          color="inherit"
          component={RouterLink}
          to="/whitepaper"
        >
          Whitepaper
        </Button>

        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>

        <Button color="inherit" onClick={connectWallet}>
          {connectedAddress
            ? formatAddress(connectedAddress)
            : "Connect Wallet"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

const containerStyles = {
  display: "flex",
  flexDirection: "column", // this makes it stack vertically
  alignItems: "center", // this centers children horizontally
  justifyContent: "center", // this centers children vertically
  minHeight: "80vh", // adjust as needed
  gap: "20px", // space between each card, adjust as needed
};

function App() {
  const [campaigns, setCampaigns] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState("");

  useEffect(() => {
    async function loadCampaigns() {
      // Initialize ethers
      await initializeEthers();

      // Get campaigns
      await getCampaigns();
    }

    loadCampaigns();
  }, []);

  async function investIntoCampaign(campaignId, amount) {
    const tx = await campaignContract.investIntoCampaign(campaignId, {
      value: ethers.utils.parseEther(amount.toString()),
    });
    console.log(tx.hash);
  }

  async function handleCreateCampaign({
    name,
    description,
    minCampaignGoal,
    endDate,
    milestoneDescriptions,
    milestonePercentages,
  }) {
    try {
      const tx = await campaignContract.createCampaign(
        name,
        description,
        minCampaignGoal,
        endDate,
        milestoneDescriptions,
        milestonePercentages
      );
      console.log(tx.hash);
      setModalOpen(false); // close the modal after success
      await getCampaigns(); // refresh the campaigns
    } catch (error) {
      console.error(`Error creating campaign: ${error.message}`);
    }
  }

  async function getCampaigns() {
    try {
      let totalCampaigns = await campaignContract.campaignIdCounter();

      if (totalCampaigns.toNumber() === 0) {
        console.log("No campaigns found");
        return;
      }

      let campaignPromises = [];
      for (let i = 1; i <= totalCampaigns; i++) {
        campaignPromises.push(campaignContract.getCampaign(i));
      }

      let campaigns = await Promise.all(campaignPromises);
      setCampaigns(campaigns);
    } catch (error) {
      console.error(`Error fetching campaigns: ${error.message}`);
    }
  }

  async function connectWallet() {
    try {
      // Request account access
      await window.ethereum.enable();

      // Switch to Mumbai Testnet
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x13881" }], // 0x13881 is the chainId for Mumbai Testnet
        });
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0x13881",
                  chainName: "Mumbai Testnet",
                  nativeCurrency: {
                    name: "MATIC",
                    symbol: "MATIC",
                    decimals: 18,
                  },
                  rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
                  blockExplorerUrls: [
                    "https://explorer-mumbai.maticvigil.com/",
                  ],
                },
              ],
            });
          } catch (addError) {
            console.error(
              `Error adding Mumbai Testnet to MetaMask: ${addError.message}`
            );
            return;
          }
        } else {
          console.error(
            `Error switching to Mumbai Testnet: ${switchError.message}`
          );
          return;
        }
      }

      console.log("Connected to MetaMask on Mumbai Testnet!");

      // Initialize ethers, provider, signer, and campaignContract

      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        setConnectedAddress(accounts[0]);
      }

      if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        setConnectedAddress(accounts[0]);
      } else {
        console.log(
          "Non-Ethereum browser detected. You can still view campaigns, but consider trying MetaMask to interact with them!"
        );
        provider = new ethers.providers.JsonRpcProvider(
          "https://rpc-mumbai.maticvigil.com/"
        );
      }

      campaignContract = new ethers.Contract(
        campaignContractAddress,
        contractABI,
        signer // Use the signer if available, or the provider otherwise
      );
    } catch (error) {
      console.error(`Error connecting to MetaMask: ${error.message}`);
    }
  }

  return (
    <Router>
      <div>
        <NavBar
          getCampaigns={getCampaigns}
          connectWallet={connectWallet}
          connectedAddress={connectedAddress}
        />
        <Routes>
          <Route path="/whitepaper" element={<WhitePaperPage />} />
          <Route
            path="/"
            element={
              <div style={containerStyles}>
                {" "}
                {/* Add this style */}
                {campaigns.map((campaign, index) => (
                  <CampaignCard
                    key={index}
                    campaign={campaign}
                    index={index}
                  />
                ))}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
