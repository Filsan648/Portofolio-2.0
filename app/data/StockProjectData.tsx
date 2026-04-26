import stock_data_connexionpage from '../asset/stock_data_connexionpage.png'
import stock_data_board from '../asset/stock_data_board.png'
import stock_data_ajoutmateriel from '../asset/stock_data_ajoutmateriel.png'
import stock_ajutmateriel2 from '../asset/stock_ajutmateriel2.png'
import stock_data_commande from '../asset/stock_data_commande.png'
import stock_data_historiquestock from '../asset/stock_data_historiquestock.png'
import stock_dayta_affectationemploye from '../asset/stock_dayta_affectationemploye.png'
import stock_data_utilisateur from '../asset/stock_data_utilisateur.png'
import stock_data_acept from '../asset/stock_data_acept.png'


export const StockProjectData = [{
    title: "Login Page",
    description: "A secure authentication interface that allows only authorized users to access the system.",
    image: stock_data_connexionpage
},

{
    title: "Dashboard",
    description: "An intuitive dashboard providing a comprehensive overview of stock levels and system activity.",
    image: stock_data_board
},
{
    title: "Add New Equipment",
    description: "A dedicated section for registering new equipment with details such as name, category, quantity, and image.",
    image: stock_data_ajoutmateriel
},
{
    title: "Add Existing Equipment / Assign to Employee",
    description: "Allows users to increase the quantity of existing equipment or assign it to an employee with proper tracking.",
    image: stock_ajutmateriel2
},
{
    title: "Orders and Order History",
    description: "Tracks all placed orders, including their status (pending, approved, rejected) and full historical records.",
    image: stock_data_commande
},
{
    title: "Stock History",
    description: "Provides a complete record of all stock inflows and outflows over time to ensure transparency and control.",
    image: stock_data_historiquestock
},
{
    title: "Employee Assignment to Stock",
    description: "Enables users to create employees and assign them to a specific stock under their responsibility.",
    image: stock_dayta_affectationemploye
},
{
    title: "User Management and Role Assignment",
    description: "Administrators can create user accounts and assign appropriate roles such as viewer or stock manager.",
    image: stock_data_utilisateur
},
{
    title: "Order Approval or Rejection",
    description: "Administrators can approve or reject order requests based on availability and operational requirements.",
    image: stock_data_acept
}]
