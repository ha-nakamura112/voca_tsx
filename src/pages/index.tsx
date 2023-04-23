import { IncomingMessage } from 'http';
import { GetServerSideProps } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async({ req } : { req : IncomingMessage }) =>{
  console.log(typeof req);
  const protocol : string = process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? 'https' : 'http';
  // this sentence return '', when req.headers.host = null,  undeifined, 0, falsy value
  const currentHost : string  = req.headers?.host || ''  ;
  // const ... = req.headers?.host ?? '',  this pattern return it only when undefined and null
  const server = `${protocol}://${currentHost}`;
  return {
    props: {
      server,
    },
  };
}

const fetchDatas  = async ( server : string) => {
  try {
    // what's the type of res? 
    // if promise, need then and catch
    //not object, cause it doesn't fit with .json();
    // const res :  = await fetch(`${server}/data/info.json`)
    const data = await res.json();
    return data
  }
  catch(err) {
    console.log(err);
  }
};

function index() {
  return (
    <div>
      
    </div>
  );
}

export default index;