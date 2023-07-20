import React, { useEffect, useState } from 'react';

const OrderRow = ({order, handleDelete, handleStatus}) => {
    const [data, setData] = useState()
    // console.log(order)
    const {_id,service, price, phone, title, email, status, name} = order

    useEffect(()=>{
        fetch(`https://geinus-car-sever.vercel.app/services/${service}`)
        .then(res =>res.json())
        .then(data=>setData(data) )
    }, [service])





    return (
        <tr>
        <th>
          <label>
            <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask rounded w-32 h-28">
                <img src={data?.img}  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {title}
        </td>
        <td>{price}</td>
        <th>
          <button onClick={()=>handleStatus(_id)} className="btn btn-ghost btn-xs">{status}</button>
        </th>
      </tr>
    );
};

export default OrderRow;