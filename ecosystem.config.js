module.exports = {
  apps : [{
    name: "app",
    script: "./src/server.js", // Ajustar para o caminho correto 
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}