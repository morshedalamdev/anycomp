const { createBrowserRouter } = require("react-router-dom");
import Specialists from "../pages/specialists";
import CreateSpecialist from "../pages/createSpecialist";
import AllSpecialists from "../pages/allSpecialists";

const routes = createBrowserRouter([
     {
          path: '/',
          children: [
               { index: true, element: <Specialists /> },
               { path: '/create/:id', element: <CreateSpecialist />},
               {path: '/edit/:id', element: <CreateSpecialist /> },
               {path: '/all', element: <AllSpecialists /> }
          ]
     }
])

export default routes;