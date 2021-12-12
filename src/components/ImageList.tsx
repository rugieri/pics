import React from 'react';

interface IProps {
  images: IImage[]
}
const ImageList: React.FunctionComponent<IProps> = props =>{
  const imageElements = props.images.map(({description, id, urls})=> {
    return <img alt={description} key={id} src ={urls.regular} />
  })
  return <div className = "image-list">{imageElements}</div>
  };
 


export default ImageList