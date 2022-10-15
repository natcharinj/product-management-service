# Dockerfile

# https://hub.docker.com/_/microsoft-mssql-server
FROM mcr.microsoft.com/mssql/server:2019-latest
EXPOSE 3308
WORKDIR /app

COPY ./entrypoint.sh ./
COPY ./init-db.sql ./

# https://dbafromthecold.com/2019/11/18/using-volumes-in-sql-server-2019-non-root-containers/
USER root

RUN chmod +x ./entrypoint.sh
RUN mkdir -p /var/opt/mssql-product/data && chown mssql /var/opt/mssql-product/data
RUN mkdir -p /var/opt/mssql-product/log && chown mssql /var/opt/mssql-product/log
RUN mkdir -p /var/opt/mssql-product/backup && chown mssql /var/opt/mssql-product/backup

USER mssql
ENTRYPOINT ["./entrypoint.sh"]