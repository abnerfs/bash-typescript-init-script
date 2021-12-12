A bash scripts that automates the creation of NodeJS + TypeScript projects. 
Steps executed by the script are based in my preference, if you want to do the steps manually check [this repo](https://github.com/abnerfs/ts-node-init).
The script is made in a way that it won't replace things in your project.

# Installation
- Download abner-tsinit [from here](https://raw.githubusercontent.com/abnerfs/bash-typescript-init-script/master/abner-tsinit)
```bash
curl https://raw.githubusercontent.com/abnerfs/bash-typescript-init-script/master/abner-tsinit --output abner-tsinit
#you can name the file anything you want
```

- Give the file execution permission
```bash
#Executed this in the folder where the file is
chmod +x abner-tsinit
```

- Save into a folder that already are in path (like /bin/) or create a folder whatever you want and add it to the path


# Usage
- Inside a empty folder run 

```
abner-tsinit
```

# What the script does
- Initializes a empty git repository
- Creates a .gitignore file
- Creates a tsconfig.jso file
- Initializes package.json with default values
- Updates package.json scripts 
- Installs typescript dependencies
- Creates a src folder with a index.ts inside

# Caveats
- The script was made in bash for no reason at all, could be made using NodeJS only
- I've only tested this in Ubuntu so far, but in theory it could run in MacOS
- It installs dependencies using **npm** for now, I can make an option to use **yarn** in the future, but now if you want to use yarn just edit the script