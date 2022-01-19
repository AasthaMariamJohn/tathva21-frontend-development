import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './team.module.css'
import PRC from './Prc'
import Tech from './Tech'
import Design from './Design'
import Market from './Market'
import Tesla from './Tesla'
import Google from './Google'

export default function Home() {
	const openprc = () => {
		setPrc(true)
		setTech(false)
		setDesign(false)
		setMarket(false)
		setTesla(false)
		setGoogle(false)
	}
	const opentech = () => {
		setPrc(false)
		setTech(true)
		setDesign(false)
		setMarket(false)
		setTesla(false)
		setGoogle(false)
	}
	const opendesign = () => {
		setDesign(true)
		setPrc(false)
		setTech(false)
		setMarket(false)
		setTesla(false)
		setGoogle(false)
	}
	const openmarket = () => {
		setPrc(false)
		setTech(false)
		setDesign(false)
		setMarket(true)
		setTesla(false)
		setGoogle(false)
	}
	const opentesla = () => {
		setPrc(false)
		setTech(false)
		setDesign(false)
		setMarket(false)
		setTesla(true)
		setGoogle(false)
	}
	const opengoogle = () => {
		setPrc(false)
		setTech(false)
		setDesign(false)
		setMarket(false)
		setTesla(false)
		setGoogle(true)
	}

	const [prc, setPrc] = useState(true)
	const [tech, setTech] = useState(false)
	const [design, setDesign] = useState(false)
	const [market, setMarket] = useState(false)
	const [tesla, setTesla] = useState(false)
	const [google, setGoogle] = useState(false)

	return (
		<div className={styles.container}>
			{/* <div className={styles.teamdesktop}> */}
			<div className={styles.teamheading}>
				<li onClick={openprc}>PRC</li>
				<li onClick={opentech}>Tech</li>
				<li onClick={opendesign}>Design</li>
				<li onClick={openmarket}>Marketing</li>
				<li onClick={opentesla}>Tesla</li>
				<li onClick={opengoogle}>Google</li>
			</div>
			{prc && <PRC />}
			{tech && <Tech />}
			{design && <Design />}
			{market && <Market />}
			{tesla && <Tesla />}
			{google && <Google />}
			{/* </div> */}
		</div>
	)
}
