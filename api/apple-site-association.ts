import { VercelRequest, VercelResponse } from '@vercel/node';

const appleSiteAssociation = {
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "QT5P9B392U.com.memod.app.development.ios",
        "paths": [ "*" ]
      }
    ]
  }
}

export default (req: VercelRequest, res: VercelResponse ) => { 
  res.json(appleSiteAssociation);
}