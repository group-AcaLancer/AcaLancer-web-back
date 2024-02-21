import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "acalancer",
};

passport.use(
  new Strategy(options, (payload, done) => {
    // Aquí lógica para verificaciones
    // Por ejemplo:
    // User.findById(payload.id)
    //   .then(user => done(null, user))
    //   .catch(err => done(err, false));
  })
);
