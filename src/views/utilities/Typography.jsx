// material-ui
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

export default function Typography() {
  return (
    <MainCard title="تایپوگرافی پایه" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <SubCard title="هدر ها">
            <Grid container direction="column" spacing={1}>
              <Grid>
                <MuiTypography variant="h1" gutterBottom>
                  h1. هدر
                </MuiTypography>
              </Grid>
              <Grid>
                <MuiTypography variant="h2" gutterBottom>
                  h2. هدر
                </MuiTypography>
              </Grid>
              <Grid>
                <MuiTypography variant="h3" gutterBottom>
                  h3. هدر
                </MuiTypography>
              </Grid>
              <Grid>
                <MuiTypography variant="h4" gutterBottom>
                  h4. هدر
                </MuiTypography>
              </Grid>
              <Grid>
                <MuiTypography variant="h5" gutterBottom>
                  h5. هدر
                </MuiTypography>
              </Grid>
              <Grid>
                <MuiTypography variant="h6" gutterBottom>
                  h6. هدر
                </MuiTypography>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <SubCard title="زیرنویس ها">
            <Grid container direction="column" spacing={1}>
              <Grid>
                <MuiTypography variant="subtitle1" gutterBottom>
                  زیر نویس ۱ . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </MuiTypography>
              </Grid>
              <Grid>
                <MuiTypography variant="subtitle2" gutterBottom>
                  زیر نویس ۲ . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </MuiTypography>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <SubCard title="بدنه ها">
            <Grid container direction="column" spacing={1}>
              <Grid>
                <MuiTypography variant="body1" gutterBottom>
                  بدنه ۱ .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </MuiTypography>
              </Grid>
              <Grid>
                <MuiTypography variant="body2" gutterBottom>
                  بدنه ۲ . لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </MuiTypography>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <SubCard title="موارد اضافه">
            <Grid container direction="column" spacing={1}>
              <Grid>
                <MuiTypography variant="button" gutterBottom sx={{ display: 'block' }}>
                  متن دکمه ها
                </MuiTypography>
              </Grid>
              <Grid>
                <MuiTypography variant="caption" gutterBottom sx={{ display: 'block' }}>
                  متن عناوین
                </MuiTypography>
              </Grid>
              <Grid>
                <MuiTypography variant="overline" gutterBottom sx={{ display: 'block' }}>
                  متن روی خط
                </MuiTypography>
              </Grid>
              <Grid>
                <MuiTypography
                  variant="body2"
                  color="primary"
                  component={Link}
                  href="https://google.com"
                  target="_blank"
                  underline="hover"
                  gutterBottom
                  sx={{ display: 'block' }}
                >
                  متن لینک دار
                </MuiTypography>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
}
