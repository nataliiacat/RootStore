import React, { useState, useEffect } from 'react'
import './detail.css'
import { useParams } from 'react-router-dom'
import { plantsData } from '../../data'

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const findDetail = plantsData.filter(plant => plant.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = '/';
    }
  }, [slug])

  return (
    <>

    </>
  )
}

export default Detail