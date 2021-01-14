import React from 'react';

import Button from '@material-ui/core/Button';
import 'react-mde/lib/styles/css/react-mde-all.css';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
// import ChipsArray from '../MarkDown/Tags';
// import { MarkdownEditor } from '../MarkDown/MarkdownEditor';
// import Layout from '../components/Layout';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  button: {
    marginTop: '3px',
    marginRight: '3rem',
    '&.MuiButton-root': {
      color: '#FFF',
      backgroundColor: '#4527A0',
    },
  },

  input: {
    width: '100%',
    height: '55px',
    fontSize: '25px',
  },
}));

const BackGroundColor = styled.div`
  background-color: #ede7f6;
  height: 92vh;
`;
const Page = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;
`;

// type Detail = { title: string; tags: string; text: string };
  
  const BigginerRider = () => {
    const [tagName, set_tagName] = React.useState<string[]>([]);
    const handle_change = (event: React.ChangeEvent<{ value: unknown }>) => {
      set_tagName(event.target.value as string[]);
    };
    const classes = useStyle();
  
    const [value, set_value] = React.useState(``);
    const { register, handleSubmit, errors } = useForm();

    return (
      <BackGroundColor>
      <form>
      {/* <form onSubmit={handleSubmit(submit)}> */}
        <input
          className={classes.input}
          type="text"
          name="title"
          placeholder="タイトル"
          ref={register({ required: true })}
        />
        {errors.title && <p>タイトルを入力してください</p>}
        {/* <ChipsArray tagName={tagName} handle_change={handle_change} /> */}
        <Page>
          {/* <MarkdownEditor value={value} set_value={set_value} /> */}
        </Page>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Button
            className={classes.button}
            type="submit"
          >
            投稿
          </Button>
        </Grid>
      </form>
    </BackGroundColor>
    );
  }

  export default BigginerRider;