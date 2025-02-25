import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

// project imports
import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function PopularCard({ isLoading }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid size={12}>
                <Grid container sx={{ alignContent: 'center', justifyContent: 'space-between' }}>
                  <Grid>
                    <Typography variant="h4">سهام محبوب</Typography>
                  </Grid>
                  <Grid>
                    <IconButton size="small" sx={{ mt: -0.625 }}>
                      <MoreHorizOutlinedIcon
                        fontSize="small"
                        sx={{ cursor: 'pointer' }}
                        aria-controls="menu-popular-card"
                        aria-haspopup="true"
                      />
                    </IconButton>
                    <Menu
                      id="menu-popular-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                      <MenuItem onClick={handleClose}> روز جاری</MenuItem>
                      <MenuItem onClick={handleClose}> ماه جاری</MenuItem>
                      <MenuItem onClick={handleClose}> سال جاری </MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={12} sx={{ mt: -1 }}>
                <BajajAreaChartCard />
              </Grid>
              <Grid size={12}>
                <Grid container direction="column">
                  <Grid>
                    <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                      <Grid>
                        <Typography variant="subtitle1" color="inherit">
                          سهام فولاد تربت
                        </Typography>
                      </Grid>
                      <Grid>
                        <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                          <Grid>
                            <Typography variant="subtitle1" color="inherit">
                              ۱۲،۰۰۰،۰۰۰ ﷼
                            </Typography>
                          </Grid>
                          <Grid>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                bgcolor: 'success.light',
                                color: 'success.dark',
                                mr: 2
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                      سود ۱۰ ٪
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid>
                    <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                      <Grid>
                        <Typography variant="subtitle1" color="inherit">
                          سهام پارتا
                        </Typography>
                      </Grid>
                      <Grid>
                        <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                          <Grid>
                            <Typography variant="subtitle1" color="inherit">
                              ۱،۰۰۰،۰۰۰ ﷼
                            </Typography>
                          </Grid>
                          <Grid>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                bgcolor: 'orange.light',
                                color: 'orange.dark',
                                marginRight: 1.875
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle2" sx={{ color: 'orange.dark' }}>
                      ضرر ۱۰٪
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid>
                    <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                      <Grid>
                        <Typography variant="subtitle1" color="inherit">
                          سهام پارسیان
                        </Typography>
                      </Grid>
                      <Grid>
                        <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                          <Grid>
                            <Typography variant="subtitle1" color="inherit">
                              ۲۰،۰۰۰،۰۰۰ ﷼
                            </Typography>
                          </Grid>
                          <Grid>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                bgcolor: 'success.light',
                                color: 'success.dark',
                                mr: 2
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                      سود ۱۰ ٪
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid>
                    <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                      <Grid>
                        <Typography variant="subtitle1" color="inherit">
                          سهام سپیدار
                        </Typography>
                      </Grid>
                      <Grid>
                        <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                          <Grid>
                            <Typography variant="subtitle1" color="inherit">
                              ۲۰۰،۰۰۰،۰۰۰ ﷼
                            </Typography>
                          </Grid>
                          <Grid>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                bgcolor: 'orange.light',
                                color: 'orange.dark',
                                mr: 2
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle2" sx={{ color: 'orange.dark' }}>
                      ضرر ۱۰٪
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid>
                    <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                      <Grid>
                        <Typography variant="subtitle1" color="inherit">
                          سهام قشم
                        </Typography>
                      </Grid>
                      <Grid>
                        <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                          <Grid>
                            <Typography variant="subtitle1" color="inherit">
                              ۶۰،۰۰۰،۰۰۰ ﷼
                            </Typography>
                          </Grid>
                          <Grid>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                bgcolor: 'orange.light',
                                color: 'orange.dark',
                                mr: 2
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle2" sx={{ color: 'orange.dark' }}>
                      ضرر ۱۰٪
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="small" disableElevation>
              نمایش همه
              <ChevronLeftOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
}

PopularCard.propTypes = { isLoading: PropTypes.bool };
