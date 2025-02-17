import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const LoadToRedirect = () => {

      const [count, setCount] = useState(3);
      const history = useHistory();

      useEffect(() => {
            const interval = setInterval(() => {
                  setCount(currentCount => --currentCount);
            }, 1000);
            // redirect once count is equal to 0
            count === 0 && history.push('/');
            // cleanup
            return () => clearInterval(interval);
      },[count,history])

      return  <div className="container p-5 text-center">
            <h1> Redirects you in {count} seconds </h1>
      </div>

}

export default LoadToRedirect;