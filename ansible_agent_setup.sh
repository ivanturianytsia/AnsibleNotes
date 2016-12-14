# Client
ssh-keygen
ssh-copy-id -i root@104.131.4.6
ssh 'root@104.131.4.6'

ansible all -i ./inventory -m ping
ansible all -i ./inventory -m shell -a 'ls'
ansible-playbook -i ./inventory ./server_setup.yaml
