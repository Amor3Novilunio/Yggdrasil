printf "\n"
echo Add Migration
printf "\n"
read -p 'Migration Name: ' name
cd ..
dotnet ef migrations add $name -s api -p persistence