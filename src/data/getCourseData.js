// src/utils/getCourseData.js

// Tüm kurs dosyalarını import et
import { courses as bilisimCourses } from '../data/courses-bilisim';
import { courses as dilCourses } from '../data/courses-dil';
import { courses as ilkogretimCourses } from '../data/courses-ilkogretim';
import { courses as liseCourses } from '../data/courses-lise';
import { courses as sporCourses } from '../data/courses-spor';
import { courses as sanatCourses } from '../data/courses-sanat';
import { courses as genelCourses } from '../data/courses-genel';

// Tüm kursları tek bir dizide topla
export const tumKurslar = [
  ...bilisimCourses,
  ...dilCourses,
  ...ilkogretimCourses,
  ...liseCourses,
  ...sporCourses,
  ...sanatCourses,
  ...genelCourses
];

// Kategorileri getir (benzersiz)
export const getKategoriler = () => {
  const kategoriler = new Set();
  tumKurslar.forEach(kurs => {
    if (kurs.category) {
      kategoriler.add(kurs.category);
    }
  });
  return Array.from(kategoriler).sort();
};

// Belirli bir kategorideki dersleri getir
export const getDerslerByKategori = (kategori) => {
  return tumKurslar
    .filter(kurs => kurs.category === kategori)
    .map(kurs => ({
      slug: kurs.slug,
      title: kurs.title,
      instructors: kurs.instructors
    }));
};

// Belirli bir dersteki eğitmenleri getir
export const getEgitmenlerByDers = (dersSlug) => {
  const kurs = tumKurslar.find(k => k.slug === dersSlug);
  return kurs ? kurs.instructors.map(i => ({
    slug: i.slug,
    name: i.name,
    email: i.email || null, // Eğer email yoksa null
    location: i.location
  })) : [];
};

// Tüm eğitmenleri getir (select için)
export const getTumEgitmenler = () => {
  const egitmenler = [];
  const egitmenSet = new Set();
  
  tumKurslar.forEach(kurs => {
    kurs.instructors.forEach(egitmen => {
      if (!egitmenSet.has(egitmen.slug)) {
        egitmenSet.add(egitmen.slug);
        egitmenler.push({
          slug: egitmen.slug,
          name: egitmen.name,
          location: egitmen.location,
          specialties: egitmen.specialties
        });
      }
    });
  });
  
  return egitmenler.sort((a, b) => a.name.localeCompare(b.name));
};

// Şehirleri getir (benzersiz)
export const getSehirler = () => {
  const sehirler = new Set();
  tumKurslar.forEach(kurs => {
    kurs.instructors.forEach(egitmen => {
      if (egitmen.location) {
        sehirler.add(egitmen.location);
      }
    });
  });
  return Array.from(sehirler).sort();
};