'use client'
import Image from "next/image";

import { useState, useCallback, useEffect } from 'react';
export default function Home() {
  
  const [data, setData] = useState<any>(null);
  const test = useCallback(() => {
    fetch('http://localhost:9000')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    test();
  }, []);
  
return (<div>Hello World</div>
  );
}
