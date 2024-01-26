import React from 'react';
import { Card, Text, Button, CardHeader, CardFooter, shorthands, Body1, makeStyles, Divider } from '@fluentui/react-components';
import { Stack } from '@fluentui/react';
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    // ...shorthands.padding("16px"),
    // ...shorthands.gap("16px"),
    justifyContent: "center",
    // gap: "16px",
  },
  header: {
    width: "300px",
    fontSize: "54px",
    alignItems: "center",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems:"flex-start",
    gap: "16px",
  },
  navChild: {
    display: "flex",
    flexDirection: "row",
    minHeight: "50px",
    justifyContent: "flex-start",
    width: "100%",
  }
});
const Blog = () => {
  const styles = useStyles()
  return (
    <div className={styles.container}>

      <Text size={1000} align='center'>App Name</Text>
      <div className={styles.navbar}>
        <Divider />
        <div className={styles.navChild}>
          <Divider vertical />
        </div>
        <Divider />
      </div>
      <Card appearance="filled-alternative">
        <Body1>
          <Text>This is the summary of my latest blog post...</Text>
        </Body1>
        <CardFooter>
          <Button appearance="primary">Read More</Button>
        </CardFooter>
      </Card>
    </div>

  );
};

export default Blog;