import crypto from 'crypto';

export default function chatbaseHashMiddleware(req, res, next) {
  if (req.session && req.session.authUser) {
    const secret = 'm2dawliviqwutnq9icpu58c25de6mzgo';
    const userId = req.session.authUser.id.toString();
    const hash = crypto.createHmac('sha256', secret).update(userId).digest('hex');
    res.locals.chatbaseUserId = userId;
    res.locals.chatbaseHash = hash;
  } else {
    res.locals.chatbaseUserId = '';
    res.locals.chatbaseHash = '';
  }
  next();
}
