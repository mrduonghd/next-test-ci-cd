import Link from "next/link";
import classes from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.footer}>
  <div className={classes.content}>
    <div className={classes.section}>
      <h3>About NextLevel Food</h3>
      <p>The premier recipe sharing platform for food enthusiasts and passionate home cooks</p>
    </div>
    
    <div className={classes.section}>
      <h3>Quick Links</h3>
      <ul>
        <li><Link href="/meals">Explore Meals</Link></li>
        <li><Link href="/community">Community</Link></li>
        <li><Link href="/meals/share">Share Recipe</Link></li>
      </ul>
    </div>

    <div className={classes.section}>
      <h3>Contact Us</h3>
      <ul>
        <li>Email: contact@nextlevelfood.com</li>
        <li>Phone: (84) 123-456-789</li>
        <li>Address: 123 Food Street, District 1, Ho Chi Minh City</li>
      </ul>
    </div>
  </div>
  
  <div className={classes.bottom}>
    <p>&copy; 2024 NextLevel Food. All rights reserved.</p>
    <div className={classes.social}>
      <Link href="https://facebook.com">Facebook</Link>
      <Link href="https://instagram.com">Instagram</Link>
      <Link href="https://twitter.com">Twitter</Link>
    </div>
  </div>
</footer>
  );
}
