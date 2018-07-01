## Skipg.me plans

#### Technical/Infrastructure
- setup CI
- use backend as a service to store photo details (just to prevent having to mess with backend hosting on VPS)

#### Roadmap
1) refine styles
2) add gesture support (hammerJs)
3) cleanup code, add comments and types
4) build backend
  - build user model
  - build auth
  - build signup
  - look into auto email service so I can screen people signing up
  - build db model for photos (comments, tags, uploader, date uploaded, date taken, cloudinary id, dimensions)
  - build photo endpoints (get photo info, set photo info, update photo info, search photos by tags, sort photos?, download all photos)
  - build delete photo endpoint (will have to delete db entry and cloudinary photo via API)
  - build push notification service for PWA
5) revisit styles AGAIN
6) Write tests
7) look into making a turn-key solution (move to private repo here) 