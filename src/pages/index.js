import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Help for you — Healthcare without the system
			</title>
			<meta name={"description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:title"} content={"Help for you — Healthcare without the system"} />
			<meta property={"og:description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/OGimage.png?v=2021-09-21T16:25:40.647Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon.svg?v=2021-09-21T16:18:29.306Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon270.svg?v=2021-09-21T16:18:07.731Z"} />
			<meta name={"msapplication-TileColor"} content={"#000848"} />
		</Helmet>
		<Image
			md-top="300px"
			lg-top="0px"
			src="https://uploads.quarkly.io/6123949e957019001e284458/images/backgroung-hero.svg?v=2021-09-21T22:07:12.314Z"
			position="absolute"
			right="0px"
			bottom="auto"
			top="130px"
			z-index="1"
			lg-right="-200px"
			md-width="600px"
		/>
		<Section background="--color-darkL2" padding="36px 0 36px 0" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				width="30%"
				sm-width="50%"
				display="flex"
				align-items="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
			>
				<Image height="auto" src="https://uploads.quarkly.io/6123949e957019001e284458/images/logo.svg?v=2021-09-21T20:30:52.302Z" width="100%" max-width="171px" />
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="70%"
				sm-width="50%"
				align-items="center"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Components.QuarklycommunityKitMobileSidePanel md-z-index="9">
					<Override
						slot="Content"
						align-items="center"
						padding="16px 0px 16px 16px"
						md-background="--color-light"
						md-z-index="9"
						md-justify-content="flex-start"
						background="rgba(255, 255, 255, 0)"
						justify-content="center"
					/>
					<Override slot="Children" justify-content="center" display="flex" align-items="center" />
					<Override slot="Button Text" md-display="none" />
					<Override slot="Button Icon" md-color="--white" md-font="36px sans-serif" />
					<Override slot="Cross" md-color="--dark" md-font="36px sans-serif" />
					<Override slot="Wrapper" md-z-index="9" />
					<Box
						display="flex"
						align-items="center"
						justify-content="flex-end"
						md-flex-direction="column"
						md-margin="40px 0px 13px 0px"
						md-font="--headline4"
					>
						<Link
							href="#"
							font="normal 600 18px/1.5 --fontFamily-googleInter"
							text-decoration-line="initial"
							color="--white"
							margin="0px 20px 0px 20px"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							md-color="--indigo"
						>
							Home
						</Link>
						<Link
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							href="#about"
							font="--base"
							text-decoration-line="initial"
							hover-opacity="1"
							md-font="--lead"
							md-color="--indigo"
							color="--grey"
							margin="0px 20px 0px 20px"
							opacity="0.8"
						>
							Application
						</Link>
						<Link
							color="--grey"
							margin="0px 20px 0px 20px"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							href="#contact"
							font="--base"
							text-decoration-line="initial"
							opacity="0.8"
							hover-opacity="1"
							md-color="--indigo"
						>
							Health
						</Link>
						<Link
							hover-opacity="1"
							md-font="--lead"
							md-color="--indigo"
							font="--base"
							color="--grey"
							opacity="0.8"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							href="#testimonial"
							text-decoration-line="initial"
							margin="0px 8px 0px 20px"
						>
							Reviews
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section padding="112px 0 0px 0" background="--color-darkL2" md-padding="96px 0 0px 0" sm-padding="72px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				margin="0px 0px 40px 0px"
				padding="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--light"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
					width="80%"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					sm-width="100%"
				>
					3 Easy To Forget Tricks About New App
				</Text>
				<Text
					margin="0px 0px 32px 0px"
					color="#FFFFFF"
					font="--lead"
					lg-text-align="center"
					text-align="center"
					width="60%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
				<Link
					href="#"
					padding="12px 24px 12px 24px"
					color="--dark"
					background="--color-secondary"
					text-decoration-line="initial"
					font="--lead"
					border-radius="8px"
					margin="0px 0px 0px 0px"
					sm-margin="0px 0px 0px 0px"
					sm-text-align="center"
					hover-transition="background-color 0.2s linear 0s"
					hover-background="--color-orange"
					transition="background-color 0.2s linear 0s"
				>
					Get Started
				</Link>
			</Box>
			<Box
				display="flex"
				width="100%"
				justify-content="center"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
			>
				<Image
					src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Component%209.png?v=2021-08-25T23:48:27.512Z"
					max-width="100%"
					transform="translateY(10px)"
					transition="transform 0.5s ease-in-out 0s"
					hover-transform="translateY(0px)"
				/>
			</Box>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0 64px 0" height="auto">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box>
						<Text
							font="--base"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							Calculate
						</Text>
						<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
							Let me Calculate,
							<br />
							the project estimation cost
						</Text>
					</Box>
				</Box>
			</Box>
			<Box padding="8px 8px 8px 8px" lg-width="100%" display="block" position="static">
				<Box>
					<Formspree endpoint="xeqpgrlv">
						<Box
							gap="16px"
							display="grid"
							flex-direction="row"
							flex-wrap="wrap"
							grid-template-columns="repeat(2, 1fr)"
							grid-gap="16px"
						>
							<Box sm-width="100%" display="flex" flex-direction="column">
								<Text font="--base" margin="0 0 4px 0">
									Name
								</Text>
								<Input width="100%" name="name" type="text" />
							</Box>
							<Box sm-width="100%" display="flex" flex-direction="column">
								<Text font="--base" margin="0 0 4px 0">
									Email
								</Text>
								<Input width="100%" type="email" name="email" />
							</Box>
							<Box display="flex" flex-direction="column" grid-column="1 / span 2">
								<Text font="--base" margin="0 0 4px 0">
									Message
								</Text>
								<Input as="textarea" rows="4" width="100%" name="message" />
							</Box>
							<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
								<Button>
									Send
								</Button>
							</Box>
						</Box>
					</Formspree>
				</Box>
			</Box>
		</Section>
		<Section sm-padding="60px 0 60px 0" lg-padding="60px 0 100px 0" padding="60px 0 160px 0">
			<Override slot="SectionContent" justify-content="center" align-items="center" />
			<Box
				width="87%"
				min-height="16px"
				height="30px"
				border-radius="30px 30px 0px 0px"
				background="--color-light"
				opacity="0.3"
			/>
			<Box
				background="--color-light"
				opacity="0.4"
				sm-display="none"
				width="93%"
				min-height="16px"
				height="30px"
				border-radius="30px 30px 0px 0px"
			/>
			<Box
				padding="66px 30px 66px 30px"
				flex-direction="column"
				sm-padding="30px 15px 30px 15px"
				sm-border-radius="12px"
				align-items="center"
				background="--color-light"
				border-radius="30px"
				justify-content="center"
				width="100%"
				display="flex"
				margin="0px 0px 0px 0px"
			>
				<Text font="--lead" color="--primary" text-transform="uppercase" margin="0px 0px 25px 0px">
					Summary
				</Text>
				<Text
					text-align="center"
					lg-font="normal 600 30px/1.3 --fontFamily-googleInter"
					md-font="normal 600 25px/1.3 --fontFamily-googleInter"
					sm-font="normal 600 19px/1.3 --fontFamily-googleInter"
					margin="0px 0px 35px 0px"
					font="normal 600 39px/1.3 --fontFamily-googleInter"
					color="--dark"
				>
					We offer 20% off every month
					<br />
					for all our subscribers
				</Text>
				<Box
					border-color="rgba(5, 0, 11, 0.1)"
					border-radius="16px"
					border-width="1px"
					border-style="solid"
					sm-width="100%"
					background="#ffffff"
					padding="12px 12px 12px 12px"
				>
					<Components.QuarklycommunityKitNetlifyForm>
						<Input
							placeholder="Email Address"
							sm-width="100%"
							sm-padding="12px 14px 12px 14px"
							border-width="0px"
							padding="14px 16px 14px 16px"
							width="320px"
							md-width="250px"
							name="Email Address"
							type="email"
							required
							background="rgba(255, 255, 255, 0)"
						/>
						<Button
							sm-width="100%"
							border-width="1px"
							border-color="--color-primary"
							font="--base"
							padding="14px 53px 14px 53px"
							sm-padding="12px 15px 12px 15px"
							hover-background="--color-light"
							hover-color="--primary"
							border-style="solid"
							background="--color-primary"
							border-radius="10px"
							md-padding="14px 30px 14px 30px"
						>
							Subscribe
						</Button>
					</Components.QuarklycommunityKitNetlifyForm>
				</Box>
			</Box>
		</Section>
		<Section background="--color-indigo" padding="100px 0 100px 0" md-padding="40px 0 40px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-border-color="LightGray"
				flex-direction="column"
				md-justify-content="center"
				display="flex"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="25%"
				md-align-items="center"
			>
				<Image src="https://uploads.quarkly.io/6123949e957019001e284458/images/logo.svg?v=2021-09-21T20:30:52.302Z" margin="0px 0px 24px 0px" max-width="171px" />
				<SocialMedia
					facebook="https://www.facebook.com/quarklyapp/"
					twitter="https://twitter.com/quarklyapp"
					telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					instagram="https://www.instagram.com/instagram/"
					align-items="flex-start"
					justify-content="flex-start"
				>
					<Override
						slot="link"
						margin="0 12px 0 0px"
						hover-background="--color-indigo"
						background="--color-greyD1"
						lg-height="28px"
						lg-padding="4px 4px 4px 4px"
						lg-display="flex"
						lg-align-items="center"
						border-radius="50%"
						lg-justify-content="center"
						lg-width="28px"
						color="--light"
					/>
					<Override slot="icon" lg-font="18px sans-serif" />
				</SocialMedia>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				md-width="100%"
				md-justify-content="center"
				empty-border-width="1px"
				empty-border-style="solid"
				flex-direction="column"
				padding="16px 16px 16px 16px"
				md-align-items="center"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					SHORT LINKS
				</Text>
				<Link
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
				>
					Home
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					Services
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					Screenshots
				</Link>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 0px 0px"
					font="--base"
					href="#"
				>
					Contact
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				flex-direction="column"
				md-justify-content="center"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				md-width="100%"
				md-align-items="center"
				empty-border-width="1px"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					HELP LINK
					<br />
				</Text>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					How to download
				</Link>
				<Link
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
				>
					How it works
				</Link>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
				>
					Video tutorial
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 0px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					FAQs
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				display="flex"
				flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					SHORT LINKS
				</Text>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="https://play.google.com/store"
					transition="opacity 0.3s ease 0s"
					target="_blank"
				>
					Google Play Store
				</Link>
				<Link
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
				>
					Apple App Store
				</Link>
				<Link
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
				>
					Download Directly
				</Link>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});