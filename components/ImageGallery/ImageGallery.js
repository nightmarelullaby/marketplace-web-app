import {useState} from "react"
import styles from "./ImageGallery.module.css"
import { v4 as uuidv4 } from 'uuid';

export default function ImageGallery({
	urls=["https://images.asos-media.com/products/another-influence-quilted-panel-slim-fit-sweatpants/9851906-1-green",
		"https://images.asos-media.com/products/another-influence-quilted-panel-slim-fit-sweatpants/9851906-2",
		"https://images.asos-media.com/products/another-influence-quilted-panel-slim-fit-sweatpants/9851906-3",
		"https://images.asos-media.com/products/another-influence-quilted-panel-slim-fit-sweatpants/9851906-4"]}){

	const [selectedImage,setSelectedImage] = useState(urls[0])
	const nextImage = () => {

		const actualIndex = urls.indexOf(selectedImage)
		const nextImageIndex = actualIndex+1
		const nextImageUrl = urls[actualIndex+1]
		if(nextImageIndex === urls.length) return setSelectedImage(urls[0]);
		setSelectedImage(nextImageUrl)
	}
	const previousImage = () => {
		const actualIndex = urls.indexOf(selectedImage)
		const previousImageIndex = actualIndex-1
		const previousImageUrl = urls[actualIndex-1]
		if(previousImageIndex <= 0) return setSelectedImage(urls[urls.length-1]);
		setSelectedImage(previousImageUrl)
	}
	return(
		<div style={{width:500}}>
			<div className={styles.main}style={{position:"relative",width:"100%"}}>
			<button 
				className={styles.buttonLeft}
				onClick={previousImage} >
				<svg width="50" height="50" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_d_31_2)">
					<rect width="18" height="18" rx="9" transform="matrix(-1 0 0 1 26 8)" fill="black"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M17 7.25C22.3848 7.25 26.75 11.6152 26.75 17C26.75 22.3848 22.3848 26.75 17 26.75C11.6152 26.75 7.25 22.3848 7.25 17C7.25 11.6152 11.6152 7.25 17 7.25ZM12.7197 17.5303C12.579 17.3897 12.5 17.1989 12.5 17C12.5 16.8011 12.579 16.6103 12.7197 16.4697L15.7197 13.4697C16.0126 13.1768 16.4874 13.1768 16.7803 13.4697C17.0732 13.7626 17.0732 14.2374 16.7803 14.5303L15.0607 16.25H20.75C21.1642 16.25 21.5 16.5858 21.5 17C21.5 17.4142 21.1642 17.75 20.75 17.75H15.0607L16.7803 19.4697C17.0732 19.7626 17.0732 20.2374 16.7803 20.5303C16.4874 20.8232 16.0126 20.8232 15.7197 20.5303L12.7197 17.5303Z" fill="white"/>
					</g>
					<defs>
					<filter id="filter0_d_31_2" x="-2" y="-2" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix"/>
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
					<feOffset/>
					<feGaussianBlur stdDeviation="3.5"/>
					<feComposite in2="hardAlpha" operator="out"/>
					<feColorMatrix type="matrix" values="0 0 0 0 0.254167 0 0 0 0 0.254167 0 0 0 0 0.254167 0 0 0 0.25 0"/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_2"/>
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_2" result="shape"/>
					</filter>
					</defs>
					</svg>
			</button>
				<img 
					className={styles.mainImg}
					src={selectedImage}
					style={{objectFit:"cover",width:"inherit",maxHeight:500,borderRadius:6}}/>
				<button 
					className={styles.buttonRight}
					onClick={nextImage}>
				<svg width="50" height="50" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_d_31_2)">
					<rect x="8" y="8" width="18" height="18" rx="9" fill="black"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M17 7.25C11.6152 7.25 7.25 11.6152 7.25 17C7.25 22.3848 11.6152 26.75 17 26.75C22.3848 26.75 26.75 22.3848 26.75 17C26.75 11.6152 22.3848 7.25 17 7.25ZM21.2803 17.5303C21.421 17.3897 21.5 17.1989 21.5 17C21.5 16.8011 21.421 16.6103 21.2803 16.4697L18.2803 13.4697C17.9874 13.1768 17.5126 13.1768 17.2197 13.4697C16.9268 13.7626 16.9268 14.2374 17.2197 14.5303L18.9393 16.25H13.25C12.8358 16.25 12.5 16.5858 12.5 17C12.5 17.4142 12.8358 17.75 13.25 17.75H18.9393L17.2197 19.4697C16.9268 19.7626 16.9268 20.2374 17.2197 20.5303C17.5126 20.8232 17.9874 20.8232 18.2803 20.5303L21.2803 17.5303Z" fill="white"/>
					</g>
					<defs>
					<filter id="filter0_d_31_2" x="-2" y="-2" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix"/>
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
					<feOffset/>
					<feGaussianBlur stdDeviation="3.5"/>
					<feComposite in2="hardAlpha" operator="out"/>
					<feColorMatrix type="matrix" values="0 0 0 0 0.254167 0 0 0 0 0.254167 0 0 0 0 0.254167 0 0 0 0.25 0"/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_2"/>
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_2" result="shape"/>
					</filter>
					</defs>
				</svg>


			</button>
			</div>
		

			<div style={{display:"flex",justifyContent:"space-between",height:150,gap:16}}>
				{urls.map(e => {
					if(e === selectedImage) return;
					return(<img 
					key={()=>uuidv4()}
					onClick={()=> setSelectedImage(e)}
					src={e}
					style={{cursor:"pointer",objectFit:"cover",flexGrow:1,width:"inherit",borderRadius:6}}/>)})}
			</div>
		</div>
		)
}