import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Principale";
import Dashboard from "../App";
import History from "../Historique";
import Statistiques from "../Statistiques";

const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/historique" component={History} />
          <Route path="/statistique" component={Statistiques} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;

// {/* <div  className="mt-4 mx-4">
//   <div  className="w-full overflow-hidden rounded-lg shadow-xs">
//     <div  className="w-full overflow-x-auto">
//       <table  className="w-full">
//         <thead>
//           <tr   className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
//             <th   className="px-4 py-3">Nom</th>
//             <th   className="px-4 py-3">Prénom</th>
//             <th   className="px-4 py-3">Date de naissance</th>
//             <th   className="px-4 py-3">Vaccination</th>
//           </tr>
//         </thead>
//         <tbody  className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
//           <tr   className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
//             <td   className="px-4 py-3">
//               <div  className="flex items-center text-sm">
//                 <div  className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
//                   <img  className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
//                   <div  className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
//                 </div>
//                 <div>
//                   <p  className="font-semibold">Hitney Wouston</p>
//                   <p  className="text-xs text-gray-600 dark:text-gray-400">Singer</p>
//                 </div>
//               </div>
//             </td>
//             <td   className="px-4 py-3 text-sm">$863.45</td>
//             <td   className="px-4 py-3 text-xs">
//               <span   className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"> Denied </span>
//             </td>
//             <td   className="px-4 py-3 text-sm">11-01-2021</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//     <div  className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
//       <span   className="flex items-center col-span-3"> Showing 21-30 of 100 </span>
//       <span   className="col-span-2"></span>
//       <!-- Pagination -->
//       <span   className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
//         <nav aria-label="Table navigation">
//           <ul   className="inline-flex items-center">
//             <li>
//               <button   className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
//                 <svg aria-hidden="true"   className="w-4 h-4 fill-current" viewBox="0 0 20 20">
//                   <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
//                 </svg>
//               </button>
//             </li>
//             <li>
//               <button   className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
//             </li>
//             <li>
//               <button   className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
//             </li>
//             <li>
//               <button   className="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
//             </li>
//             <li>
//               <button   className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
//             </li>
//             <li>
//               <span   className="px-3 py-1">...</span>
//             </li>
//             <li>
//               <button   className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
//             </li>
//             <li>
//               <button   className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
//             </li>
//             <li>
//               <button   className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
//                 <svg  className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
//                   <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
//                 </svg>
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </span>
//     </div>
//   </div>
// </div>
// <!-- ./Client Table --> */}
