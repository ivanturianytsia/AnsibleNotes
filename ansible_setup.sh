# Docker image
docker pull geerlingguy/docker-centos7-ansible
docker run --name=ansible --detach --privileged --volume=/root/ansiblevol:/shared:ro geerlingguy/docker-centos7-ansible:latest /usr/lib/systemd/systemd
docker exec -i -t ansible /bin/bash
docker exec --tty 92e3799d72f6 env TERM=xterm ansible all -m shell -a 'ls'
docker exec --tty 92e3799d72f6 env TERM=xterm ansible-playbook /playbooks/cli_variables.yaml
docker exec --tty 92e3799d72f6 env TERM=xterm ansible all -m shell -a 'cp /shared/cli_variables.yaml /playbooks/cli_variables.yaml'
