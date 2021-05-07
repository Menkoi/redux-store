import React, { useEffect } from "react";


function Success() {
    const [addOrder] = useMutation(ADD_ORDER);

useEffect(() => {
  async function saveOrder() {

  }

  saveOrder(
      
  );
}, [addOrder]);

    return (
      <div>
        <Jumbotron>
          <h1>Success!</h1>
          <h2>
            Thank you for your purchase!
          </h2>
          <h2>
            You will now be redirected to the homepage
          </h2>
        </Jumbotron>
      </div>
    );
  };