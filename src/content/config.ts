import { defineCollection, z } from 'astro:content';

const restaurants = defineCollection({
    type: 'data',
    schema: z.object({
        nom: z.string(),
        adresse: z.string(),
        ville: z.string(),
        province: z.string().default('QC'),
        codePostal: z.string(),
        telephone: z.string(),
        heures: z.object({
            lundi:    z.string().optional(),
            mardi:    z.string().optional(),
            mercredi: z.string().optional(),
            jeudi:    z.string().optional(),
            vendredi: z.string().optional(),
            samedi:   z.string().optional(),
            dimanche: z.string().optional(),
        }),
        liensCommande: z.object({
            livraison: z.string().optional(),
            emporter:  z.string().optional(),
        }),
        photos: z.array(z.string()).default([]),
        actif: z.boolean().default(true),
    }),
});

const homepage = defineCollection({
    type: 'data',
    schema: z.object({
        tao: z.object({
            image:    z.string(),
            label:    z.string().default(''),
            titre:    z.string(),
            btnTexte: z.string(),
            btnLien:  z.string(),
        }),
        mozzarella: z.object({
            image:    z.string(),
            label:    z.string().default(''),
            titre:    z.string(),
            btnTexte: z.string(),
            btnLien:  z.string(),
        }),
        gsp: z.object({
            image:     z.string(),
            titre:     z.string(),
            sousTitre: z.string(),
            mention:   z.string().default(''),
            btnTexte:  z.string(),
            btnLien:   z.string(),
        }),
        pizzas10: z.object({
            image:     z.string().optional(),
            titre:     z.string(),
            prix:      z.string().default(''),
            sousTexte: z.string(),
            btnLien:   z.string(),
        }),
        concours: z.object({
            image:    z.string().optional(),
            mention:  z.string().default(''),
            prix:     z.string().default(''),
            btnTexte: z.string(),
            btnLien:  z.string(),
        }),
    }),
});

export const collections = { restaurants, homepage };
