## Setting up Environment Variables

To securely manage sensitive information such as database URLs, we utilize environment variables. Follow these steps to set up your environment variables:

make a file in root directory named as .env and add 

```javascript
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="Your cld name"
DATABASE_URL: "mongodb url"
CLD_API_NM:"cld api name"
CLD_API_KEY: "cld api key"
CLD_API_SECRET: "cld api secret"
```

## Contributing



1. Fork the repository by clicking the "Fork" button at the top right corner of this page.

2. Clone your fork of the repository to your local machine:
    go to your forked repo click on code there you can find the https link(your_fork_url)
    now open terminal and  

    ```
    git clone <your_fork_url>
    ```
    also 
    ```
    git remote add upstream <original_repository_URL>
    ```
    This allows you to fetch changes from the original repository to keep your fork up-to-date.


3. Create a new branch for your changes:
    ```
    git checkout -b <NEW_BRANCH_NAME>
    ```
    */Mark that this step is optional, it only creates a new branch to existing repo
        You can continue with master branch only/* 

4. Make your changes to the codebase. Ensure that your changes follow the project's coding conventions and standards.

5. Commit your changes with descriptive commit messages:
    ```
    git add .
    git commit -m 'Add some feature'
    ```

6. Push your changes to your fork:
    ```
    git push origin <NEW_BRANCH_NAME>
    ```

7. Navigate to the original repository (this repository) and click on the "Compare & pull request" button.

8. Provide a clear title and description for your pull request, detailing the purpose of your changes.

9. Click on the "Create pull request" button to submit your pull request.



## Syncing the repo on local repo

1.  It will fetch the updated repo from the github

         ```
          git fetch upstream
         ```


3.  It is used to select the branch to make changes

         ```
        git checkout master
         ```


5.  It is used to merge the codebase on your local machine

         ```
        git merge upstream/master
         ```

7.  IDK what it is used for but as someone said to run it, I did and you should too.        

         ```
        git rebase upstream/master
         ```

NOTE: If using any branch except master change the master with your branch name with that in 3&4.


