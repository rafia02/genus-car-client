import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Contaxt/ContextProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const {user, setStatus} = useContext(AuthContex)



    useEffect(()=>{
        fetch(`https://geinus-car-sever.vercel.app/orders?email=${user?.email}`,{
          headers:{
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setOrders(data)})
    }, [user?.email])


    const handleDelete=(id)=>{
        console.log(id)
        fetch(`https://geinus-car-sever.vercel.app/orders/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{ 
            if(data.deletedCount > 0){
              const remaining =  orders.filter(or=> or._id !== id)
                setOrders(remaining)
            }
            console.log(data)})
        
    }

    const handleStatus = (id)=>{
        fetch(`https://geinus-car-sever.vercel.app/orders/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res=> res.json())
        .then(dta=>{
          const remaining = orders.filter(o=> o._id !== id)
          const change = orders.find(f=>f._id === id)
            change.status = 'false'
            const neworder = [change, ...remaining]
            setOrders(neworder)
            console.log(dta)
        })
    }



    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

        {
            orders.map(order => <OrderRow
                 key={order._id}
                 order={order}
                 handleDelete={handleDelete}
                 handleStatus={handleStatus}
                   ></OrderRow>)
        }

    </tbody>

  </table>
</div>
    );
};

export default Orders;