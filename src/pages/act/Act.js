import { Grid, TextareaAutosize, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import { ReactComponent as DownArrow } from './../../assets/svg/down-arrow.svg';
import { ReactComponent as Play } from './../../assets/svg/play.svg';
import { ReactComponent as Download } from './../../assets/svg/download.svg';
import AiModelIMG from './../../assets/img/ai-model1.jpg';
import theme from '../../theme';
import { Link } from 'react-router-dom';

const AIModelAttributes = [
  { name: 'Face', value: 'Deepak Chopra' },
  { name: 'Voice', value: 'Deepak Chopra' },
  { name: 'Brain', value: 'Deepak Chopra V2.0' },
];

const History = [
  {
    content:
      'What place is your favorite to eat sushi and drink cold brew? What place is your favorite to eat sushi and drink cold brew?',
  },
  {
    content: 'What place is your favorite?',
  },
  {
    content:
      'What place is your favorite to eat sushi and drink cold brew? What place is your favorite to eat sushi and drink cold brew?',
  },
  {
    content: 'What place is your favorite?',
  },
  {
    content: 'What place is your favorite to eat sushi?',
  },
  {
    content: 'What place is your favorite?',
  },
  {
    content: 'What place is your favorite to eat sushi?',
  },
  {
    content: 'What place is your favorite?',
  },
];

const Act = () => {
  const StyledImage = styled('img')({
    objectFit: 'contain',
    maxWidth: '100%',
  });

  const HistoryContent = styled('div')(({ theme }) => ({
    display: 'flex',
    marginTop: theme.spacing(2),
    '&:hover': {
      color: theme.palette.secondary.main,
      div: {
        display: 'flex',
      },
    },
  }));

  // Another Way of using styled
  // const HistoryContent = styled('div')(
  //   ({ theme }) => `
  //   display: flex;
  //   margin-top: 20px;
  //   &:hover {
  //     color: ${theme.palette.secondary.main};
  //     div {
  //       display: flex;
  //     }
  //   }
  // `
  // );

  const AIModelAttribute = ({ attrName, attrValue }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body2" sx={{ textTransform: 'uppercase' }}>
          {attrName}
        </Typography>
        <Typography color="secondary" sx={{ textDecoration: 'underline' }}>
          {attrValue}
        </Typography>
      </Box>
    );
  };
  const HistoryDivider = () => {
    return (
      <Box sx={{ my: 4, display: 'flex', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ textTransform: 'uppercase', mr: 2 }}>
          History
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            borderBottom: '1px solid',
            borderColor: 'primary',
          }}
        ></Box>
      </Box>
    );
  };

  return (
    <Grid container sx={{ pl: 6, pr: 1, my: 2 }}>
      <Grid item xs={5} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography color="secondary" sx={{ mr: 3 }}>
          <Link
            to={{
              pathname: '/speech',
            }}
            style={{ color: theme.palette.secondary.main }}
          >
            Go To Speech Demo
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle1" color="secondary" sx={{ mr: 3 }}>
            Act
          </Typography>
          <DownArrow />
        </Box>
        <HistoryDivider />
        <Box sx={{ maxHeight: '70%', overflowY: 'auto' }}>
          {History.map((item, index) => (
            <HistoryContent key={index}>
              <Typography>{item.content}</Typography>
              <Box sx={{ display: 'none', cursor: 'pointer' }}>
                {/* <Box sx={{ display: 'none', ':hover': { cursor: 'pointer' } }}> */}
                <Box sx={{ mx: 1 }}>
                  <Download />
                </Box>
                <Play />
              </Box>
            </HistoryContent>
          ))}
        </Box>
        <HistoryDivider />
        <TextareaAutosize
          aria-label="maximum height"
          // placeholder="Maximum 4 rows"
          defaultValue="Where is your favorite place."
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            // border: 'none',
            outline: 'none',
            color: theme.palette.secondary.main,
            fontSize: '20px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 10,
            curser: 'pointer',
          }}
        >
          <Box sx={{ mx: 1 }}>
            <Download
              style={{ width: theme.spacing(5), height: theme.spacing(5) }}
            />
          </Box>
          <Play style={{ width: theme.spacing(5), height: theme.spacing(5) }} />
        </Box>
      </Grid>
      <Grid item xs={7} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          {AIModelAttributes.map((attr, index) => (
            <AIModelAttribute
              key={index}
              attrName={attr.name}
              attrValue={attr.value}
            ></AIModelAttribute>
          ))}
        </Box>
        <Box
          sx={{
            my: 7,
            mx: 2,
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <StyledImage src={AiModelIMG} alt=""></StyledImage>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Act;
