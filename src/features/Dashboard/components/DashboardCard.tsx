import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface CardProps {
  title: string;
  height: { xs: number; md: number };
}

export default function OutlinedCard({ title, height }: CardProps) {
  return (
    <Box sx={{ minWidth: 275, flex: 1 }}>
      <Card variant="outlined" title={title} sx={{ height: height }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
