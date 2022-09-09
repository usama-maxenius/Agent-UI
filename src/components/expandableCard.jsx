/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import {
  MediumPoppin22,
  MediumPoppin16,
  ExpandedText,
  WrappingDropdown,
} from './styled/commonDesign';
import Dropdown from './dropdown';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ExpandableCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: '#F5F5F5', border: '1px solid #16161640' }}
            aria-label="recipe"
          >
            <DoneRoundedIcon sx={{ color: '#16161640' }} />
          </Avatar>
        }
        action={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon sx={{ color: '#2541b2' }} />
          </ExpandMore>
        }
        title={<MediumPoppin22>Colorado Technical University</MediumPoppin22>}
        subheader={<MediumPoppin16>Colorado Springs, CO</MediumPoppin16>}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ExpandedText>
          <Typography paragraph>
            The University of Colorado Colorado Springs is a public institution
            that was founded in 1965. It has a total undergraduate enrollment of
            10,119 (fall 2020), its setting is urban, and the campus size is 550
            acres. It utilizes a semester-based academic calendar. University of
            Colorado Colorado Springs’ ranking in the 2022 edition of Best
            Colleges is National Universities, #299-391. Its in-state tuition
            and fees are $10,480; out-of-state tuition and fees are $25,600.
          </Typography>
        </ExpandedText>
      </Collapse>
      <WrappingDropdown>
        <Dropdown
          item={{
            options: [
              { name: 'Additional area of study', value: '1' },
              { name: '2022', value: '2' },
            ],
          }}
        />
      </WrappingDropdown>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
