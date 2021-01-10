import Button from '@material-ui/core/Button';
import 'react-mde/lib/styles/css/react-mde-all.css';
import styled from 'styled-components';
import React from 'react';
import { MarkdownEditor } from '../MarkDown/MarkDownEditor';
// import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import ChipsArray from '../MarkDown/Tags';
// import { CREATE_ARTICLE } from '../client_hooks/articles';
// import { useMutation } from '@apollo/client';
import { useCookies } from 'react-cookie';
// import Router from 'next/router';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
// import { withRouter } from 'react-router-dom';
import * as H from 'history'

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

type Detail = { title: string; tags: string; text: string };
interface Props {
    props: string;
    history: H.History;
    push: any;
}

// export default function Form() {
const Form = (props: Props) => {
  const [tagName, set_tagName] = React.useState<string[]>([]);
  const handle_change = (event: React.ChangeEvent<{ value: unknown }>) => {
    set_tagName(event.target.value as string[]);
  };
  const classes = useStyle();

  const toggleSubmit = () => {
      props.history.push('/');
  }

//   const [cookies] = useCookies(['token']);
//   React.useEffect(() => {
//     !Object.keys(cookies).length && Router.push('/signin');
//   }, [cookies]);

  const [value, set_value] = React.useState(``);
  const { register, handleSubmit, errors } = useForm();
//   const [create_article] = useMutation(CREATE_ARTICLE);
//   const submit = async (detail: Detail) => {
//     try {
//       await create_article({
//         variables: {
//           title: detail.title,
//           tags: tagName.join(','),
//           text: value,
//         },
//       });
//     } catch (er) {
//       console.log(er);
//     }
//   };

  return (
    // <Layout>
      <BackGroundColor>
        {/* <form onSubmit={handleSubmit(submit)}> */}
        <form>
          <input
            className={classes.input}
            type="text"
            name="title"
            placeholder="タイトル"
            ref={register({ required: true })}
          />
          {errors.title && <p>タイトルを入力してください</p>}
          <ChipsArray tagName={tagName} handle_change={handle_change} />
          <Page>
            <MarkdownEditor value={value} set_value={set_value} />
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
              onClick={toggleSubmit}
            >
              Proshareに投稿
            </Button>
          </Grid>
        </form>
      </BackGroundColor>
    // </Layout>
  );
}

export default Form;
