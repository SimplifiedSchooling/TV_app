const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('./config');
const { tokenTypes } = require('./tokens');
const { User, Sansthan, DepartmentUser } = require('../models');

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    if (payload.userType === 'user') {
      const user = await User.findById(payload.sub);
      if (!user) {
        return done(null, false);
      }
      done(null, user);
    } else if (payload.userType === 'sansthan') {
      const sansthan = await Sansthan.findById(payload.sub);
      if (!sansthan) {
        return done(null, false);
      }
      done(null, sansthan);
    } else if (payload.userType === 'department') {
      const department = await DepartmentUser.findById(payload.sub);
      if (!department) {
        return done(null, false);
      }
      done(null, department);
    } else {
      return done(null, false);
    }
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};
