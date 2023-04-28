import axios from 'axios';

const API_URL = "https://api.harvestapp.com/v2";
const HARVEST_ACCOUNT_ID = "1138686";
const AUTH =
  "Bearer 2995280.pt.2On-8vSK0gHQ0MoE-ALu-WtKvAbRh6RB6BI_ooxOZWl4cdQUioT1NDNUXHCmo7MXRyvj2gvJrYWqqTmI1M1uQg";
const CONFIG = {
  headers: {
    "Harvest-Account-Id": HARVEST_ACCOUNT_ID,
    "Authorization": AUTH
  },
};

console.log('Started Harvest Dashboard Reporting');

async function getCompany() {
  try {
    const response = await axios.get(`${API_URL}/company`, CONFIG);
    console.log('Company Response ->', response.data);
    console.log("Finished Harvest Dashboard Reporting");
  } catch (error) {
    console.error(error);
  }
}

getCompany();