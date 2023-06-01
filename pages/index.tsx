import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Container, Navbar, Text, Grid, Col } from '@nextui-org/react'
import InfoCard from '../components/InfoCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          
          <Text b color = "inherit">
            Learn To Code
          </Text>
        </Navbar.Brand>

        <Navbar.Content hideIn = "xs">
          <Navbar.Link href="#">All Courses</Navbar.Link>
          <Navbar.Link href="#">Discord</Navbar.Link>
          <Navbar.Link href="#">Contact Us</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
        <Navbar.Link href="#">Login</Navbar.Link>
        <Navbar.Item>
          <Button auto flat href="#">
            Sign up
          </Button>
        </Navbar.Item>
        </Navbar.Content>

      </Navbar>
      {/* Jumbotron */}
        <Grid.Container justify="center" css={{"height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/manc_clouds.jpg)"}}>
          <Grid xs={12} sm={6} alignItems="center">
            <Col css={{"width": "100%"}}>
              <Text weight={"bold"} size={70} css={{"textAlign": "center", "color":"black"}}>Learn To Code</Text>
              <Text weight={"bold"} size={45} css={{"textAlign": "center", "color":"black"}}>Join one of our 15 offered courses</Text>
              <Button size="md" shadow color="gradient" css ={{"width": "100%", "marginTop": "10px"}}> Join Now</Button>
            </Col>
          </Grid>
        </Grid.Container>
      {/* 3 display cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Featured Course" /* top left*/
            title="Learn how to create a webpage with Next.js" /* row under top left */
            imageURL="https://littlevisuals.co/images/red_dawn.jpg"
            studentCount = "3,500"
          />
        </Grid>

        <Grid xs={12} sm={4}>
          <InfoCard
            label="Featured Course" /* top left*/
            title="How to Create a Start Up" /* row under top left */
            imageURL="https://littlevisuals.co/images/zeus.jpg"
            studentCount = "5,000"
          />
        </Grid>

        <Grid xs={12} sm={4}>
          <InfoCard
            label="Featured Course" /* top left*/
            title="Learn to manage Databases with MySQL" /* row under top left */
            imageURL="https://littlevisuals.co/images/whisp.jpg"
            studentCount = "1,500"
          />
        </Grid>
      </Grid.Container>
    </Container>
  )
}
