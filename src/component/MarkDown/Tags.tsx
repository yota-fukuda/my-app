import React, { FC } from 'react';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: "100%",
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT *10.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tags = [
  'JavaScript',
  'TypeScript',
  'Ruby',
  'Python',
  'CSS',
  'HTML',
  'Java',
  'PHP',
  'C#',
  'Swift',
  'C++',
  'COBOL',
  'Go',
  'Kotlin',
  'Objective-C',
  'Scala',
  'VBA',
  'SQL',
  'MySQL',
  'NoSQL',
  'Oracle Database',
  'PostgreSQL',
  'SQLite',
];

interface IProps {
  tagName: string[];
  handle_change: (event: React.ChangeEvent<{ value: unknown }>) => void;
}
function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelect: FC<IProps> =({tagName,handle_change})=> {
  const classes = useStyles();
  const theme = useTheme();


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">タグ</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={tagName}
          onChange={handle_change}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {(selected as string[]).map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {tags.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, tagName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>   
    </div>
  );
}

export default MultipleSelect