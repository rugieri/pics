import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard';
interface IProps {
  images: IImage[]
}
const ImageList: React.FunctionComponent<IProps> = props =>{
  const imageElements = props.images.map(({description, id, urls})=> {
    return <ImageCard key={image.id} image ={image} />
  })
  return <div className = "image-list">{imageElements}</div>
  };
 


export default ImageList