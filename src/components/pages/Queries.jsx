import React from "react";
import styled from "styled-components";
import {app} from "../../firebase";
import {getDatabase, ref, get} from "firebase/database";
import { useEffect, useState } from "react";

const Queries = () => {
    const getDB = getDatabase(app);
    const [queries, setQueries] = useState([]);

    const getDatafromfirebase = async () =>{
        try{
            const dbRef = ref(getDB, "customer/queries");
            const snapshot = await get(dbRef);
            
            if(snapshot.exists()){
                console.log(snapshot.val());
                setQueries(Object.values(snapshot.val()));
            
            }else{
                console.log("No data available");
            }

        }catch(error){
            console.error("Error fetching data:", error);
        }

    }
    
    useEffect(() => {
        getDatafromfirebase();
      }, []);
    
      useEffect(() => {
        console.log("Updated queries:", queries); // Log updated state
      }, [queries]);
    
  return (
    <Wrapper>
<div class="table-container">
    <h1>Customer Queries</h1>
    
    <div className="table-wrapper">
      <table id="taskTable">
        <thead>
          <tr>
            <th>Name ⇅</th>
            <th> Email ⇅</th>
            <th>Mobile  To ⇅</th>
            <th>Message ⇅</th>
            {/* <th onclick="sortTable(4)">Status ⇅</th> */}
          </tr>
        </thead>
        <tbody>
            {
                queries.map((item, index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.cq_name}</td>
                            <td>{item.cq_email}</td>
                            <td>{item.cq_phone}</td>
                            <td>{item.cq_query}</td>
                        </tr>
                    )
                })
            }
        
        </tbody>
      </table>
    </div>
  </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
/* General Styling */


/* Table Container */
.table-container {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  color: #fff;
  background: #000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow-x: auto;
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 30px;
  color: #fff;
  text-transform: uppercase;
}

#completedCount {
  margin-bottom: 20px;
  color: #555;
}

/* Table Styling */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  color: #fff;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  min-width: 200px;
  font-size: 1rem;
}

th {
  background: #000;
  cursor: pointer;
  color: #fff;
}

.status {
  font-weight: bold;
}

.status[data-status="completed"] {
  color: green;
}

.status[data-status="pending"] {
  color: red;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  table {
    font-size: 0.9rem;
  }

  th, td {
    padding: 8px;
  }
}

@media screen and (max-width: 480px) {
  table {
    font-size: 0.8rem;
  }

  th, td {
    padding: 6px;
  }
}

`;

export default Queries;
