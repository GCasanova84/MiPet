<template>
  <v-container class="pa-0 mb-3">
    <v-row>
      <v-col class="py-0">
        <span class="caption ps-3 independence--text">Región</span>
        <v-select
          v-model="region"
          :items="regions"
          item-text="region"
          :rules="selectRule"
          dense
          outlined
          class="rounded-pill"
          color="secondary"
          :append-icon="value.region? '$expand': null"
        >
          <template #append>
            <v-icon color="secondary">
              $expand
            </v-icon>
          </template>
        </v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <span class="caption ps-3 independence--text">Comuna</span>
        <v-select
          v-model="commune"
          :items="communes"
          :disabled="!value.region"
          :rules="selectRule"
          dense
          outlined
          class="rounded-pill"
          color="secondary"
          :append-icon="!value.region? '$expand': null"
        >
          <template v-if="value.region" #append>
            <v-icon color="secondary">
              $expand
            </v-icon>
          </template>
        </v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'InputAddressSelect',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      region: this.value.region,
      commune: this.value.commune,
      regions: [
        { region: 'Arica y Parinacota', communes: ['Arica', 'Camarones', 'Putre', 'General Lagos'] },
        { region: 'Tarapacá', communes: ['Iquique', 'Camiña', 'Colchane', 'Huara', 'Pica', 'Pozo Almonte', 'Alto Hospicio'] },
        { region: 'Antofagasta', communes: ['Antofagasta', 'Mejillones', 'Sierra Gorda', 'Taltal', 'Calama', 'Ollagüe', 'San Pedro de Atacama', 'Tocopilla', 'María Elena'] },
        { region: 'Atacama', communes: ['Copiapó', 'Caldera', 'Tierra Amarilla', 'Chañaral', 'Diego de Almagro', 'Vallenar', 'Alto del Carmen', 'Freirina', 'Huasco'] },
        { region: 'Coquimbo', communes: ['La Serena', 'Coquimbo', 'Andacollo', 'La Higuera', 'Paiguano', 'Vicuña', 'Illapel', 'Canela', 'Los Vilos', 'Salamanca', 'Ovalle', 'Combarbalá', 'Monte Patria', 'Punitaqui', 'Río Hurtado'] },
        { region: 'Valparaíso', communes: ['Valparaíso', 'Casablanca', 'Concón', 'Juan Fernández', 'Puchuncaví', 'Quilpué', 'Quintero', 'Villa Alemana', 'Viña del Mar', 'Isla  de Pascua', 'Los Andes', 'Calle Larga', 'Rinconada', 'San Esteban', 'La Ligua', 'Cabildo', 'Papudo', 'Petorca', 'Zapallar', 'Quillota', 'Calera', 'Hijuelas', 'La Cruz', 'Limache', 'Nogales', 'Olmué', 'San Antonio', 'Algarrobo', 'Cartagena', 'El Quisco', 'El Tabo', 'Santo Domingo', 'San Felipe', 'Catemu', 'Llaillay', 'Panquehue', 'Putaendo', 'Santa María'] },
        { region: "Libertador B. O'Higgins", communes: ['Rancagua', 'Codegua', 'Coinco', 'Coltauco', 'Doñihue', 'Graneros', 'Las Cabras', 'Machalí', 'Malloa', 'Mostazal', 'Olivar', 'Peumo', 'Pichidegua', 'Quinta de Tilcoco', 'Rengo', 'Requínoa', 'San Vicente', 'Pichilemu', 'La Estrella', 'Litueche', 'Marchihue', 'Navidad', 'Paredones', 'San Fernando', 'Chépica', 'Chimbarongo', 'Lolol', 'Nancagua', 'Palmilla', 'Peralillo', 'Placilla', 'Pumanque', 'Santa Cruz'] },
        { region: 'Maule', communes: ['Talca', 'Constitución', 'Curepto', 'Empedrado', 'Maule', 'Pelarco', 'Pencahue', 'Río Claro', 'San Clemente', 'San Rafael', 'Cauquenes', 'Chanco', 'Pelluhue', 'Curicó', 'Hualañé', 'Licantén', 'Molina', 'Rauco', 'Romeral', 'Sagrada Familia', 'Teno', 'Vichuquén', 'Linares', 'Colbún', 'Longaví', 'Parral', 'Retiro', 'San Javier', 'Villa Alegre', 'Yerbas Buenas'] },
        { region: 'Biobío', communes: ['Concepción', 'Coronel', 'Chiguayante', 'Florida', 'Hualqui', 'Lota', 'Penco', 'San Pedro de la Paz', 'Santa Juana', 'Talcahuano', 'Tomé', 'Hualpén', 'Lebu', 'Arauco', 'Cañete', 'Contulmo', 'Curanilahue', 'Los Álamos', 'Tirúa', 'Los Ángeles', 'Antuco', 'Cabrero', 'Laja', 'Mulchén', 'Nacimiento', 'Negrete', 'Quilaco', 'Quilleco', 'San Rosendo', 'Santa Bárbara', 'Tucapel', 'Yumbel', 'Alto Biobío'] },
        { region: 'Ñuble', communes: ['Chillán', 'Bulnes', 'Cobquecura', 'Coelemu', 'Coihueco', 'Chillán Viejo', 'El Carmen', 'Ninhue', 'Ñiquén', 'Pemuco', 'Pinto', 'Portezuelo', 'Quillón', 'Quirihue', 'Ránquil', 'San Carlos', 'San Fabián', 'San Ignacio', 'San Nicolás', 'Treguaco', 'Yungay'] },
        { region: 'La Araucanía', communes: ['Temuco', 'Carahue', 'Cunco', 'Curarrehue', 'Freire', 'Galvarino', 'Gorbea', 'Lautaro', 'Loncoche', 'Melipeuco', 'Nueva Imperial', 'Padre Las Casas', 'Perquenco', 'Pitrufquén', 'Pucón', 'Saavedra', 'Teodoro Schmidt', 'Toltén', 'Vilcún', 'Villarrica', 'Cholchol', 'Angol', 'Collipulli', 'Curacautín', 'Ercilla', 'Lonquimay', 'Los Sauces', 'Lumaco', 'Purén', 'Renaico', 'Traiguén', 'Victoria'] },
        { region: 'Los Ríos', communes: ['Valdivia', 'Corral', 'Futrono', 'La Unión', 'Lago Ranco', 'Lanco', 'Los Lagos', 'Máfil', 'Mariquina', 'Paillaco', 'Panguipulli', 'Río Bueno'] },
        { region: 'Los Lagos', communes: ['Puerto Montt', 'Calbuco', 'Cochamó', 'Fresia', 'Frutillar', 'Los Muermos', 'Llanquihue', 'Maullín', 'Puerto Varas', 'Castro', 'Ancud', 'Chonchi', 'Curaco de Vélez', 'Dalcahue', 'Puqueldón', 'Queilén', 'Quellón', 'Quemchi', 'Quinchao', 'Osorno', 'Puerto Octay', 'Purranque', 'Puyehue', 'Río Negro', 'San Juan de la Costa', 'San Pablo', 'Chaitén', 'Futaleufú', 'Hualaihué', 'Palena'] },
        { region: 'Aisén del Gral. C. Ibáñez del Campo', communes: ['Coihaique', 'Lago Verde', 'Aisén', 'Cisnes', 'Guaitecas', 'Cochrane', "O'Higgins", 'Tortel', 'Chile Chico', 'Río Ibáñez'] },
        { region: 'Magallanes y de La Antártica Chilena', communes: ['Punta Arenas', 'Laguna Blanca', 'Río Verde', 'San Gregorio', 'Cabo de Hornos', 'Antártica', 'Porvenir', 'Primavera', 'Timaukel', 'Natales', 'Torres del Paine'] },
        { region: 'Metropolitana de Santiago', communes: ['Santiago', 'Cerrillos', 'Cerro Navia', 'Conchalí', 'El Bosque', 'Estación Central', 'Huechuraba', 'Independencia', 'La Cisterna', 'La Florida', 'La Granja', 'La Pintana', 'La Reina', 'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maipú', 'Ñuñoa', 'Pedro Aguirre Cerda', 'Peñalolén', 'Providencia', 'Pudahuel', 'Quilicura', 'Quinta Normal', 'Recoleta', 'Renca', 'San Joaquín', 'San Miguel', 'San Ramón', 'Vitacura', 'Puente Alto', 'Pirque', 'San José de Maipo', 'Colina', 'Lampa', 'Tiltil', 'San Bernardo', 'Buin', 'Calera de Tango', 'Paine', 'Melipilla', 'Alhué', 'Curacaví', 'María Pinto', 'San Pedro', 'Talagante', 'El Monte', 'Isla de Maipo', 'Padre Hurtado', 'Peñaflor'] }
      ],
      selectRule: [v => !!v || 'Este campo es requerido']
    }
  },
  computed: {
    communes () {
      if (this.value.region) {
        return this.regions.find(region => region.region === this.value.region).communes
      } else {
        return []
      }
    }
  },
  watch: {
    region () {
      this.$emit('input', { ...this.value, region: this.region })
    },
    commune () {
      this.$emit('input', { ...this.value, commune: this.commune })
    }
  }
}
</script>

<style scoped>
  span::after {
    content: '*';
    color: rgba(119, 181, 76, 1);
  }
</style>
