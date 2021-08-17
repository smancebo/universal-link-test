import { VercelRequest, VercelResponse } from '@vercel/node';

const appleSiteAssociation = {
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": ["5ASGP2XZJG.com.memodapp.app.development.ios"],
        "components": [
          {
            "/": "/home/"
          }
        ]
      }
    ]
  }
}

export default (req: VercelRequest, res: VercelResponse ) => { 
  res.json(appleSiteAssociation);
}